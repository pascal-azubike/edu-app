import { createElement } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, BadgeVariant } from '@/components/ui/badge';
import { Button, ButtonVariant, ButtonSize } from '@/components/ui/button';
import {
	Clock,
	MessageCircle,
	Heart,
	Share2,
	BookOpen,
	TrendingUp,
	Award,
	Calendar,
	ChevronRight,
	Sparkles,
} from 'lucide-react';
import type { NewsItem } from '@/types/dashboard/stats.types';
import { MOCK_NEWS_ITEMS } from '@/data/dashboard/stats-page-data';

// Mapping of category to icon component
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
	announcement: Calendar,
	studyTips: BookOpen,
	admissions: Award,
	personalized: TrendingUp,
};

// Mapping of category to color classes
const CATEGORY_COLORS: Record<string, string> = {
	announcement: 'bg-primary/10 text-primary border-primary/20',
	studyTips: 'bg-success/10 text-success border-success/20',
	admissions: 'bg-accent/10 text-accent border-accent/20',
	personalized: 'bg-warning/10 text-warning border-warning/20',
};

//  NewsFeed displays a list of news articles and a call-to-action.
//  Each news item is rendered using the NewsFeedItem sub-component.

function NewsFeed() {
	return (
		<Card className="shadow-lg border-0 overflow-hidden">
			<CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
							<Sparkles className="h-5 w-5 text-foreground" />
						</div>
						<div>
							<CardTitle className="text-xl font-bold">Latest Updates</CardTitle>
							<p className="text-muted-foreground text-sm mt-1">Stay informed with personalized news</p>
						</div>
					</div>
					<Button
						variant={ButtonVariant.GHOST}
						size={ButtonSize.SM}
						className="text-primary hover:bg-primary/10 font-medium">
						View All
						<ChevronRight className="h-4 w-4 ml-1" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<div className="divide-y divide-border">
					{MOCK_NEWS_ITEMS.map((item) => (
						<NewsFeedItem key={item.id} item={item} />
					))}
				</div>
				{/* View More CTA */}
				<div className="p-6 bg-gradient-to-r from-muted/50 to-muted/30 border-t border-border">
					<Button
						variant={ButtonVariant.OUTLINE}
						className="w-full group hover:bg-primary hover:text-foreground border-border transition-all duration-200">
						<span>Explore More Updates</span>
						<ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

export default NewsFeed;

//   NewsFeedItem renders a single news article card.
//  Handles like, comment, and share actions.

function NewsFeedItem({ item }: { item: NewsItem }) {
	const categoryIcon = CATEGORY_ICONS[item.category.toLowerCase()] ?? BookOpen;
	const categoryColor = CATEGORY_COLORS[item.category.toLowerCase()] || 'bg-muted text-muted-foreground border-border';

	const handleLike = () => {
		// i will add the like handling logic here
	};
	const handleComment = () => {
		// i will handle comment logic here
	};
	const handleShare = () => {
		//    will handle sharing logic here
	};

	return (
		<article className="group transition-all duration-200 hover:bg-muted/50 bg-gradient-to-r from-primary/5 to-secondary/5">
			<div className="p-6">
				<div className="flex gap-4">
					{/* Category Icon */}
					<div className="flex-shrink-0">
						<div
							className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all duration-200 group-hover:shadow-md bg-gradient-to-br from-primary to-secondary`}>
							{createElement(categoryIcon, {
								className: 'h-6 w-6 text-primary-foreground',
							})}
						</div>
					</div>

					{/* Main Content */}
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-3 mb-3">
							<Badge variant={BadgeVariant.OUTLINE} className={`text-xs font-medium px-3 py-1 ${categoryColor}`}>
								{item.category}
							</Badge>
							{Boolean(item.featured) && (
								<Badge className="bg-gradient-to-r from-amber to-orange text-amber-foreground border-0 text-xs px-2 py-1">
									Featured
								</Badge>
							)}
							<div className="flex items-center gap-2 text-xs text-muted-foreground ml-auto">
								<Clock className="h-3 w-3" />
								<span>{item.readTime}</span>
								<span>•</span>
								<span>{item.publishedAt}</span>
							</div>
						</div>

						<h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary cursor-pointer transition-colors">
							{item.title}
						</h3>

						<p className="text-muted-foreground mb-4 leading-relaxed text-sm">{item.summary}</p>

						<div className="flex items-center justify-between">
							<div className="text-xs text-muted-foreground">
								by <span className="font-medium">{item.author}</span>
							</div>

							<div className="flex items-center gap-1">
								<Button
									variant={ButtonVariant.GHOST}
									size={ButtonSize.SM}
									className={`gap-1 h-8 px-3 text-xs rounded-full ${
										Boolean(item.isLiked)
											? ' text-destructive bg-destructive/10 dark:bg-destructive/20 dark:text-destructive-foreground hover:bg-destructive/20 hover:text-destructive'
											: 'text-muted-foreground  hover:bg-foreground/10 hover:text-foreground'
									}`}
									onClick={handleLike}>
									<Heart className={`h-3.5 w-3.5 ${Boolean(item.isLiked) ? 'fill-current' : ''}`} />
									<span>{item.likes}</span>
								</Button>

								<Button
									variant={ButtonVariant.GHOST}
									size={ButtonSize.SM}
									className="gap-1 h-8 px-3 text-xs text-muted-foreground  hover:bg-foreground/10 hover:text-foreground rounded-full"
									onClick={handleComment}>
									<MessageCircle className="h-3.5 w-3.5" />
									<span>{item.comments}</span>
								</Button>

								<Button
									variant={ButtonVariant.GHOST}
									size={ButtonSize.SM}
									className="h-8 px-2 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-full"
									onClick={handleShare}>
									<Share2 className="h-3.5 w-3.5" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
