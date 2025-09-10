"use server";

export async function getRepos() {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
            cache: "no-store",
          });
      
          const data = await response.json();
      
          if (!response.ok) {
           throw new Error(data.message || "Failed to fetch repos");
          }
          return data; 

        } catch (error: unknown) {
          if (error instanceof Error) {
          throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
} 