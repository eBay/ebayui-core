import { afterEach, describe, it, expect, vi } from "vitest";
vi.mock("../../loader", () => ({
    loader: vi.fn(),
}));

import { waitFor } from "@marko/testing-library";
import { CDNLoader } from "..";
import { loader } from "../../loader";

describe("CDN Loader", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it("Properly loads files from CDN", async () => {
        loader.mockResolvedValue(true);
        const setLoading = vi.fn();
        const handleSuccess = vi.fn();
        const handleError = vi.fn();

        const cdnLoader = new CDNLoader(
            {
                subscribeTo: vi.fn().mockReturnValue({
                    once: vi.fn(),
                }),
            },
            {
                key: "key",
                files: ["files"],
                types: ["src"],
                setLoading,
                handleSuccess,
                handleError,
            },
        );

        cdnLoader.mount();
        await waitFor(() => {
            expect(handleSuccess).toBeCalled("success called");
            expect(handleError).toBeCalledTimes(0, "error called");
            expect(setLoading).toHaveBeenCalledWith(false);
        });
    });

    it("Properly fails", async () => {
        loader.mockRejectedValue(new Error());
        const setLoading = vi.fn();
        const handleSuccess = vi.fn();
        const handleError = vi.fn();

        const cdnLoader = new CDNLoader(
            {
                subscribeTo: vi.fn().mockReturnValue({
                    once: vi.fn(),
                }),
            },
            {
                key: "key",
                files: ["files"],
                types: ["src"],
                setLoading,
                handleSuccess,
                handleError,
            },
        );

        cdnLoader.mount();

        await waitFor(
            () => {
                expect(handleError).toBeCalled("error called");
                expect(handleSuccess).toBeCalledTimes(0, "success called");
                expect(setLoading).toHaveBeenCalledWith(false);
            },
            { timeout: 6000 },
        );
    });
});
