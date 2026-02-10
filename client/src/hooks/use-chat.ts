import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type ChatInput = z.infer<typeof api.chat.send.input>;
type ChatResponse = z.infer<typeof api.chat.send.responses[200]>;

export function useChat() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ChatInput) => {
      // Validate input before sending using schema
      const validatedInput = api.chat.send.input.parse(data);

      const res = await fetch(api.chat.send.path, {
        method: api.chat.send.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedInput),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to talk to Johnny");
      }

      // Validate response using schema
      const rawData = await res.json();
      return api.chat.send.responses[200].parse(rawData);
    },
    onError: (error) => {
      toast({
        title: "Whoa Mama! Something went wrong!",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
