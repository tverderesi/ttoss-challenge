import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useMutation } from "react-relay";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { parseVideoSrc } from "../../lib/parseVideoSrc";
import { createVideoMutation } from "@/graphql/mutations/Videos";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const formSchema = z.object({
  title: z.string(),
  src: z.string().refine((value) => parseVideoSrc(value) !== undefined, "Invalid video source"),
  url: z.string().refine((value) => value.startsWith("https://www.youtube.com/watch?v="), "Invalid video URL"),
  rating: z.string().readonly(),
});

export function NewVideoForm({ loadQuery }: { loadQuery: any }) {
  const { pagination } = useContext(AppContext);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: undefined, src: undefined, url: undefined, rating: "1000" },
  });
  const [commit, isInFlight] = useMutation(createVideoMutation);

  const mutate = (data: any) => {
    const src = parseVideoSrc(data.src);
    const url = data.url.split("&")[0];
    const input = { ...data, src, url };
    commit({
      variables: { input },
      onCompleted: (data) => {
        loadQuery({ first: pagination }, { fetchPolicy: "network-only" });
        console.log(data);
        form.reset();
      },
      onError: (error) => console.error(error),
    });
  };

  return (
    <section className="w-full space-y-8">
      <h1 className="text-4xl font-semibold text-secondary">Add Videos</h1>
      <Card className="w-full">
        <CardHeader />
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => mutate(data))} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Video Title" {...field} />
                    </FormControl>
                    <FormDescription>Copy the title from the youtube video.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Video URL" {...field} />
                    </FormControl>
                    <FormDescription>
                      Paste the Video URL here. It should start with{" "}
                      <span className="italic">https://www.youtube.com/watch?v=</span>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="src"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video iframe</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste the iframe here" {...field} className="min-h-20" />
                    </FormControl>
                    <FormDescription>Paste the video iframe here.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 font-semibold" disabled={isInFlight}>
                Add Video
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter />
      </Card>
    </section>
  );
}
