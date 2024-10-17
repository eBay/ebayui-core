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
        beforeEach(async () => {
            sellerColumn = component.getByRole("button", { name: "Seller" });
            await fireEvent.click(sellerColumn);
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
                  href="#icon-sort-up-12"
                />
              </svg>
              
              
            </button>
          `);
            expect(component.emitted("sort")[0][0]).toMatchInlineSnapshot(`
              {
                "sorted": {
                  "0": "desc",
                  "1": "none",
                  "2": "none",
                  "3": "none",
                  "4": "none",
                  "5": "none",
                  "6": "none",
                  "7": "none",
                  "8": "none",
                  "9": "none",
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
                expect(component.emitted("sort")[0][0]).toMatchInlineSnapshot(`
                  {
                    "sorted": {
                      "0": "none",
                      "1": "none",
                      "2": "none",
                      "3": "none",
                      "4": "none",
                      "5": "none",
                      "6": "none",
                      "7": "none",
                      "8": "none",
                      "9": "none",
                    },
                  }
                `);
            });
        });
    });
});
