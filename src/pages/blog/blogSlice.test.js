import { describe, it, expect } from "vitest";

import blogReducer, { setPosts } from "./blogSlice";

describe("blogReducer", () => {
  describe("setPosts", () => {
    it("sets posts and topics in reducer", () => {
      const action = setPosts([
        { id: 1, topics: ["test"], publishedAt: "2023-10-01" },
        { id: 2, topics: ["example", "test"], publishedAt: "2023-11-01" },
      ]);

      const expected = {
        posts: [
          { id: 2, topics: ["example", "test"], publishedAt: "2023-11-01" },
          { id: 1, topics: ["test"], publishedAt: "2023-10-01" },
        ],
        topics: ["example", "test"],
      };

      expect(blogReducer(undefined, action)).toEqual(expected);
    });
  });
});
