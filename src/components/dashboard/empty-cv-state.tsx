"use client";

import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function EmptyCvState() {
  return (
    <Card className="mx-auto max-w-md border-border/10 bg-card/50">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        {/* Icon placeholder */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted/30">
          <FileText className="size-12 text-muted-foreground" />
        </div>

        {/* Heading */}
        <h2 className="mb-2 text-xl font-semibold">No CVs yet</h2>

        {/* Description */}
        <p className="mb-6 max-w-xs text-sm text-muted-foreground">
          Create your first CV to get started. Choose from professional templates
          and customize to your needs.
        </p>

        {/* Create CV Button */}
        <Button
          size="lg"
          className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
        >
          <Plus className="size-5" />
          Create CV
        </Button>
      </CardContent>
    </Card>
  );
}
