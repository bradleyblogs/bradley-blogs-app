import { describe, it, expect } from "vitest";

import blogReducer, { setPosts } from "./blogSlice";

describe("blogReducer", () => {
  describe("setPosts", () => {
    it("sets posts and topics in reducer", () => {
      const action = setPosts([
        { id: 1, title: "test" },
        { id: 2, title: "example" },
      ]);

      const expected = {
        posts: [
          { id: 1, title: "test" },
          { id: 2, title: "example" },
        ],
        topics: ["test", "example"],
      };

      expect(blogReducer(undefined, action)).toEqual(expected);
    });
  });
});
