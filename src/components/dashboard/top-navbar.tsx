"use client";

import { Menu, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopNavbarProps {
  onMenuClick: () => void;
}

export function TopNavbar({ onMenuClick }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/10 bg-[#0a0a0a]/80 backdrop-blur-md px-4 lg:px-6">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="p-2 text-muted-foreground hover:text-foreground lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {/* Spacer for mobile */}
      <div className="lg:hidden" />

      {/* User dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="flex items-center gap-3 rounded-lg p-1.5 hover:bg-muted/50 transition-colors">
            <Avatar size="sm">
              <AvatarFallback className="bg-violet-500/20 text-violet-400">
                <User className="size-4" />
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium md:inline-block">
              John Doe
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2">
            <User className="size-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
            <LogOut className="size-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
