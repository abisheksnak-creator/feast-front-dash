import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  rollNo: string;
  department: string;
  lastOrder: string;
  totalOrders: number;
  amount: number;
}

const CUSTOMER_DATA: Customer[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    rollNo: "21CS101",
    department: "Computer Science",
    lastOrder: "2024-01-15",
    totalOrders: 25,
    amount: 1250,
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNo: "21EC045",
    department: "Electronics",
    lastOrder: "2024-01-14",
    totalOrders: 18,
    amount: 980,
  },
  {
    id: 3,
    name: "Amit Kumar",
    rollNo: "21ME078",
    department: "Mechanical",
    lastOrder: "2024-01-13",
    totalOrders: 32,
    amount: 1680,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    rollNo: "21IT056",
    department: "Information Tech",
    lastOrder: "2024-01-12",
    totalOrders: 15,
    amount: 750,
  },
  {
    id: 5,
    name: "Vikram Singh",
    rollNo: "21CE092",
    department: "Civil",
    lastOrder: "2024-01-11",
    totalOrders: 22,
    amount: 1100,
  },
  {
    id: 6,
    name: "Anjali Gupta",
    rollNo: "21EE034",
    department: "Electrical",
    lastOrder: "2024-01-10",
    totalOrders: 28,
    amount: 1440,
  },
];

const Customers = () => {
  const totalCustomers = CUSTOMER_DATA.length;
  const totalRevenue = CUSTOMER_DATA.reduce((sum, customer) => sum + customer.amount, 0);
  const avgOrderValue = Math.round(totalRevenue / totalCustomers);

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-warm bg-clip-text text-transparent">
            Customer Records
          </h1>
          <p className="text-muted-foreground">View all customer order history</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-card border-border shadow-card animate-scale-in">
            <CardContent className="pt-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-foreground">{totalCustomers}</p>
              <p className="text-sm text-muted-foreground">Total Customers</p>
            </CardContent>
          </Card>

          <Card className="bg-success/10 border-success animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-success">₹{totalRevenue}</p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 border-accent animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-accent">₹{avgOrderValue}</p>
              <p className="text-sm text-muted-foreground">Avg Order Value</p>
            </CardContent>
          </Card>
        </div>

        {/* Customer Table */}
        <Card className="bg-card border-border shadow-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <h3 className="text-xl font-bold text-foreground">Customer Details</h3>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Name</TableHead>
                    <TableHead className="font-bold">Roll No</TableHead>
                    <TableHead className="font-bold">Department</TableHead>
                    <TableHead className="font-bold">Last Order</TableHead>
                    <TableHead className="font-bold text-center">Total Orders</TableHead>
                    <TableHead className="font-bold text-right">Amount Spent</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CUSTOMER_DATA.map((customer) => (
                    <TableRow key={customer.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.rollNo}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{customer.department}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{customer.lastOrder}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-primary">{customer.totalOrders}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-bold text-success">
                        ₹{customer.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Customers;
