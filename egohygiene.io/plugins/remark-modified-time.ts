import { execSync } from "child_process";
import type { Plugin } from "unified";
import type { VFile } from "vfile";
import type { Root } from "mdast";

export const remarkModifiedTime: Plugin<[], Root> = () => {
  return (_: Root, file: VFile) => {
    const filepath = file.history[0];

    try {
      const result: Buffer<ArrayBufferLike> = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);

      // Ensure `astro` and `frontmatter` exist
      const astroData = (file.data.astro ??= {});
      const frontmatter = (astroData.frontmatter ??= {});
      frontmatter.lastModified = result.toString().trim();
    } catch (error) {
      console.warn(`Failed to get git modified time for ${filepath}`, error);
    }
  };
};
