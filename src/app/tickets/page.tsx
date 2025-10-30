import { getTickets } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

function getStatusVariant(status: 'open' | 'in progress' | 'closed'): 'default' | 'secondary' | 'outline' {
    switch (status) {
        case 'open': return 'default';
        case 'in progress': return 'secondary';
        case 'closed': return 'outline';
    }
}

function getUrgencyVariant(urgency: 'high' | 'medium' | 'low' | undefined): 'destructive' | 'secondary' | 'outline' {
    switch (urgency) {
        case 'high': return 'destructive';
        case 'medium': return 'secondary';
        case 'low': return 'outline';
        default: return 'outline';
    }
}

export default async function ViewTicketsPage() {
    const tickets = await getTickets();

    return (
        <div className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">Your Tickets</CardTitle>
                    <CardDescription>
                        A list of submitted support tickets. In a real app, this would be filtered by user.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Subject</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                                    <TableHead className="hidden md:table-cell">Urgency</TableHead>
                                    <TableHead className="hidden lg:table-cell">Tags</TableHead>
                                    <TableHead className="text-right">Submitted</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center h-24">
                                            No tickets found.
                                        </TableCell>
                                    </TableRow>
                                )}
                                {tickets.map((ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell className="font-medium max-w-[12rem] truncate">{ticket.subject}</TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge variant={getStatusVariant(ticket.status)} className="capitalize">{ticket.status}</Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <Badge variant={getUrgencyVariant(ticket.urgency)} className="capitalize">{ticket.urgency || 'N/A'}</Badge>
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell">
                                            <div className="flex flex-wrap gap-1 max-w-xs">
                                                {ticket.keywords?.map((keyword, i) => (
                                                    <Badge key={i} variant="outline">{keyword}</Badge>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground">
                                            {formatDistanceToNow(ticket.createdAt, { addSuffix: true })}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
