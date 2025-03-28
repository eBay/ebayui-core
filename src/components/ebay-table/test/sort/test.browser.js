import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../../table.stories";

const { ColumnSorting } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given sortable table with Seller column is sorted in ascending order (from input)", () => {
    beforeEach(async () => {
        component = await render(ColumnSorting);
    });

    describe("when Seller column is clicked", () => {
        let sellerColumn;
        let emitted;
        beforeEach(async () => {
            sellerColumn = component.getByRole("button", { name: "Seller" });
            await fireEvent.click(sellerColumn);
            emitted = component.emitted("sort");
        });
        it("then proper sort event should be emitted", async () => {
            expect(sellerColumn).toMatchInlineSnapshot(`
              <button
                type="button"
              >
                
                Seller
                
                 
                
                
                <svg
                  aria-hidden="true"
                  class="icon icon--12"
                  focusable="false"
                >
                  <use
                    href="#icon-sort-down-12"
                  />
                </svg>
                
                
              </button>
            `);
            expect(emitted[0][0]).toMatchInlineSnapshot(`
              {
                "sorted": {
                  "sellerCol": "desc",
                },
              }
            `);
        });

        describe("when Seller column is clicked again", () => {
            beforeEach(async () => {
                sellerColumn = component.getByRole("button", {
                    name: "Seller",
                });
                await fireEvent.click(sellerColumn);
                emitted = component.emitted("sort");
            });
            it("then proper sort event should be emitted", async () => {
                expect(sellerColumn).toMatchInlineSnapshot(`
                  <button
                    type="button"
                  >
                    
                    Seller
                    
                     
                    
                    
                    <svg
                      aria-hidden="true"
                      class="icon icon--12"
                      focusable="false"
                    >
                      <use
                        href="#icon-sort-12"
                      />
                    </svg>
                    
                    
                  </button>
                `);
                expect(emitted[0][0]).toMatchInlineSnapshot(`
                  {
                    "sorted": {
                      "sellerCol": "none",
                    },
                  }
                `);
            });
        });
    });
});
