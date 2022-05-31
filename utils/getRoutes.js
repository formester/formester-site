export default async () => {
  const { $content } = require("@nuxt/content");
  let files = await $content({ deep: true }).only(["path", "published"]).fetch();
  files = files.filter(file => file.published)

  return files.map((file) => (file.path === "/index" ? "/" : file.path));
};