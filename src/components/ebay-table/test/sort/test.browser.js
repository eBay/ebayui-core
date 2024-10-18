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
                aria-pressed="true"
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
                  "deliveryCol": "none",
                  "itemCol": "none",
                  "listPriceCol": "none",
                  "orderCol": "none",
                  "protectionCol": "none",
                  "quantityCol": "none",
                  "sellerCol": "desc",
                  "shippingCol": "none",
                  "statusCol": "none",
                  "watchersCol": "none",
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
                    aria-pressed="false"
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
                      "deliveryCol": "none",
                      "itemCol": "none",
                      "listPriceCol": "none",
                      "orderCol": "none",
                      "protectionCol": "none",
                      "quantityCol": "none",
                      "sellerCol": "none",
                      "shippingCol": "none",
                      "statusCol": "none",
                      "watchersCol": "none",
                    },
                  }
                `);
            });
        });
    });
});
