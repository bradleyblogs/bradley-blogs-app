import { describe, it, expect } from "vitest";

import * as selectors from "./selectors";

describe("Selectors", () => {
  describe("selectPosts", () => {
    it("selects posts from the store", () => {
      expect(
        selectors.selectPosts({
          blog: { posts: [{ id: 1 }], topics: ["test"] },
        }),
      ).toEqual([{ id: 1 }]);
    });
  });
});
