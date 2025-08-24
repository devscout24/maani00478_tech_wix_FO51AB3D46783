/**
 * Fallback method for copying text to clipboard using execCommand
 * @param text - The text to copy to clipboard
 * @returns boolean - Returns true if successful, false if failed
 */
const fallbackCopyTextToClipboard = (text: string): boolean => {
  try {
    // Create a temporary textarea element
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Make the textarea invisible but still selectable
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";

    // Add to DOM, select, copy, and remove
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);

    return successful;
  } catch (error) {
    console.error("Fallback copy method failed:", error);
    return false;
  }
};

/**
 * Copy text to clipboard using the modern Clipboard API with fallback
 * @param text - The text to copy to clipboard
 * @returns Promise<boolean> - Returns true if successful, false if failed
 */
export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  try {
    // Check if the modern Clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      return fallbackCopyTextToClipboard(text);
    }
  } catch (error) {
    console.error("Failed to copy text to clipboard:", error);
    // Try fallback method if modern API fails
    return fallbackCopyTextToClipboard(text);
  }
};

/**
 * Copy text to clipboard with built-in toast notifications
 * @param text - The text to copy to clipboard
 * @param toast - Toast notification object with success/error methods
 * @param successMessage - Custom success message (optional)
 * @param errorMessage - Custom error message (optional)
 */
export const copyTextToClipboardWithToast = async (
  text: string,
  toast: { success: (msg: string) => void; error: (msg: string) => void },
  successMessage: string = "Text copied to clipboard!",
  errorMessage: string = "Failed to copy text to clipboard"
): Promise<void> => {
  const success = await copyTextToClipboard(text);

  if (success) {
    toast.success(successMessage);
  } else {
    toast.error(errorMessage);
  }
};
