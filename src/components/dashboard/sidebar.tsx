// Dashboard sidebar navigation with collapsible sections and user info.
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { UseAuth } from '@/hooks/hooks';
import { BookOpen, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SidebarLinks from './SidebarLinks';

export default function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [expandedSections, setExpandedSections] = useState<Array<string>>([]);
	const { logout, user } = UseAuth();

	const toggleSidebar = () => setCollapsed((prev) => !prev);
	const toggleSection = (sectionName: string) => {
		setExpandedSections((prev) =>
			prev.includes(sectionName) ? prev.filter((name) => name !== sectionName) : [...prev, sectionName],
		);
	};

	return (
		<div
			className={cn(
				'flex flex-col h-screen border-r p-4 transition-all duration-300',
				'bg-background text-foreground',
				collapsed ? 'w-20' : 'w-64',
			)}>
			{/* Sidebar Header */}
			<div className="flex items-center mb-8">
				<Link href="/">
					{!collapsed && (
						<div className='flex items-center'>
							<BookOpen className="h-8 w-8 text-primary mr-3" />
							<h1 className="text-lg font-semibold m-0">EDUapp</h1>
						</div>
					)}
					{collapsed && <BookOpen className="h-8 w-8 text-primary mx-auto" />}
				</Link>
				{/* toglle button /////////////////////// */}
				<button
					onClick={(e) => {
						e.preventDefault();
						toggleSidebar();
					}}
					className="p-2 rounded-full hover:bg-accent ml-auto"
					aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
					{collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
				</button>
			</div>

			{/* Sidebar User Info /////////////////////////*/}
			{!collapsed && user && (
				<div className="mb-6 px-3 py-2">
					<p className="font-medium truncate">{user.name}</p>
					<p className="text-sm text-muted-foreground truncate">{user.email}</p>
					<span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/20 text-primary mt-1">
						{user.role}
					</span>
				</div>
			)}

			{/* Sidebar Links */}
			<SidebarLinks collapsed={collapsed} expandedSections={expandedSections} toggleSection={toggleSection} />

			{/* Sidebar Footer */}
			<div className="pt-4 mt-6 border-t">
				<button
					onClick={logout}
					className="w-full flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
					<LogOut className={cn('h-5 w-5', collapsed ? 'mx-auto' : 'mr-3')} />
					{!collapsed && <span>Logout</span>}
				</button>
			</div>
		</div>
	);
}
