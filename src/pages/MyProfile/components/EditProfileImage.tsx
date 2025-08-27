import React, { useState, useRef } from "react";
import { Camera, Upload, X } from "lucide-react";
import { useMemberUpdateMutation } from "@/redux/api/endpoints/auth.api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { closeDialog } from "@/redux/slices/dialogSlice";

export default function EditProfileImage({ dialogKey }: { dialogKey: string }) {
  const dispatch = useAppDispatch();
  const [memberUpdate, { isLoading, isError }] = useMemberUpdateMutation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // const [uploadStatus, setUploadStatus] = useState<
  //   "idle" | "success" | "error"
  // >("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setSelectedFile(file);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      // setUploadStatus("idle");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      const res = await memberUpdate(formData).unwrap();
      if (res.status) {
        toast.success(res.message);
        setSelectedFile(null);
        setPreviewUrl(null);
        dispatch(closeDialog(dialogKey));
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      const acceptError = error as { data?: { message: string } };
      toast.error(
        acceptError && "data" in acceptError
          ? (acceptError.data as { message: string }).message
          : "Something went wrong."
      );
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    // setUploadStatus("idle");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Edit Profile Image
      </h2>

      {/* Image Preview Area */}
      <div className="mb-6">
        <div className="relative w-48 h-48 mx-auto border-2 border-dashed border-gray-300 rounded-full overflow-hidden bg-gray-50 hover:border-blue-400 transition-colors">
          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                disabled={isLoading}
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
              onClick={triggerFileInput}
            >
              <Camera className="text-gray-400 mb-2" size={32} />
              <p className="text-gray-500 text-sm text-center px-4">
                Click to select profile image
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Action Buttons */}
      <div>
        <Button disabled={isLoading} onClick={handleUpload} className="w-full">
          <Upload size={16} className="mr-2" />
          Upload
        </Button>
      </div>

      {/* File Info */}
      {selectedFile && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium">File:</span> {selectedFile.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Size:</span>{" "}
            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
      )}

      {/* Upload Status Messages */}
      {isError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">
            Upload failed. Please try again.
          </p>
        </div>
      )}
    </section>
  );
}

// import { useMemberUpdateMutation } from "@/redux/api/endpoints/auth.api";

// export default function EditProfileImage({ dialogKey }: { dialogKey: string }) {
//   const [memberUpdate, { isLoading }] = useMemberUpdateMutation();

//   return <section>Edit Profile Image</section>;
// }
