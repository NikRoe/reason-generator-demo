import OpenAI from "openai";

const openai = new OpenAI();

export default async function handler(request, response) {
  const ingredients = request.body;

  if (request.method !== "POST") {
    console.error("Method Not Allowed: ", request.method);
    return response
      .status(405)
      .json({ message: "Method Not Allowed. Please use POST." });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a cooking expert specializing in the combination of ingredients and the various flavours.",
        },
        {
          role: "user",
          content: `Why does the combination of ${ingredients.join(
            " and "
          )} create a delicious flavor? For example, cheddar and apple pair well because the sharpness of the cheddar complements the sweet, juicy crunch of the apple. Please explain in one sentence.`,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 500,
    });

    console.log(completion.choices[0]);
    response.status(200).json(completion.choices[0].message.content);
  } catch (error) {
    console.error("Failed to fetch completion:", error);
    response
      .status(500)
      .json({ message: "Internal Server Error", details: error.message });
  }
}
