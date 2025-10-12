"use client";

import { Button } from "@/components/ui/button";
import { MappedPR } from "@/app/actions/getPullRequests";

interface SaveSnapshotButtonProps {
  prs: MappedPR[];
  repoName: string;
}

export function SaveSnapshotButton({ prs, repoName }: SaveSnapshotButtonProps) {
  const handleSave = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${repoName}-${timestamp}.json`;

    const blob = new Blob([JSON.stringify(prs, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleSave} className="cursor-pointer">
      Save Snapshot
    </Button>
  );
}
