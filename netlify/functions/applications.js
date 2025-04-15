import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(event, context) {
  const { httpMethod, body } = event;

  if (httpMethod === "GET") {
    // Fetch all applications
    try {
      const applications = await prisma.application.findMany();
      return {
        statusCode: 200,
        body: JSON.stringify(applications),
      };
    } catch (error) {
      console.error("Error fetching applications:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch applications" }),
      };
    }
  }

  if (httpMethod === "POST") {
    // Save application data
    try {
      const data = JSON.parse(body);
      const application = await prisma.application.create({
        data,
      });
      return {
        statusCode: 201,
        body: JSON.stringify(application),
      };
    } catch (error) {
      console.error("Error saving application:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to save application" }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
}
