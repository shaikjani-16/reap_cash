import {
  ArrowRight,
  DollarSign,
  Clock,
  TrendingUp,
  BarChart,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function FourthSection() {
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Unlock Your Rental Income, Simplified.
        </h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl">
          Reap Cash gives rental hosts fast access to their future earnings with
          ease and flexibility.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Started Today
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <Zap className="h-10 w-10 text-blue-600 mb-2" />
            <CardTitle>Financing that fits your cash flow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Access up to 100% of your confirmed bookings, transforming your
              future earnings into immediate capital, no matter how many
              bookings you have.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Clock className="h-10 w-10 text-blue-600 mb-2" />
            <CardTitle>Financing that fits your timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Get cash in hand within days, not weeks. Reap makes it simple to
              advance your booking income so you can keep growing your business
              without delay.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
            <CardTitle>Financing that fits your needs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Say goodbye to the stress of traditional financing. Reap is
              designed for short-term rental hosts, offering flexible repayment
              options that work with your booking schedule.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <BarChart className="h-10 w-10 text-blue-600 mb-2" />
            <CardTitle>Financing that fits your business</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Grow your rental business by reinvesting in property upgrades,
              marketing, or operations. Reap gives you the financial freedom to
              expand when you need it.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>;
}
