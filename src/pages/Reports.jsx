
import Card from '../components/Card'
import { Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react'

export default function Reports() {
  const stats = [
    { name: 'Total Products', value: '124', icon: Package, color: 'blue' },
    { name: 'Monthly Sales', value: '$12,456', icon: TrendingUp, color: 'green' },
    { name: 'Low Stock Items', value: '8', icon: AlertTriangle, color: 'red' },
    { name: 'Revenue', value: '$45,678', icon: DollarSign, color: 'purple' },
  ]

  const lowStockItems = [
    { product: 'USB-C Cable', current: 8, min: 10 },
    { product: 'Laptop Stand', current: 5, min: 15 },
    { product: 'Webcam', current: 3, min: 10 },
  ]

  const recentActivity = [
    { action: 'Products added', count: 12, type: 'positive' },
    { action: 'Products sold', count: 8, type: 'negative' },
    { action: 'Low stock alerts', count: 3, type: 'warning' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">View inventory reports and analytics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Alerts */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Low Stock Alerts</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="space-y-3">
            {lowStockItems.map((item) => (
              <div key={item.product} className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.product}</p>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Current: {item.current} • Minimum: {item.min}
                  </p>
                </div>
                <span className="text-red-500 font-medium">-{item.min - item.current}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.action} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{activity.action}</span>
                <span className={
                  activity.type === 'positive' ? 'text-green-600' : 
                  activity.type === 'negative' ? 'text-blue-600' : 
                  'text-red-600'
                }>
                  {activity.type === 'positive' ? '+' : activity.type === 'negative' ? '-' : ''}
                  {activity.count}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Monthly Summary */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-600 dark:text-blue-400">Total Sales</p>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">$12,456</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm text-green-600 dark:text-green-400">Products Sold</p>
            <p className="text-2xl font-bold text-green-700 dark:text-green-300">156</p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="text-sm text-purple-600 dark:text-purple-400">New Customers</p>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">24</p>
          </div>
        </div>
      </Card>
    </div>
  )
}