// src/pages/Dashboard.jsx
import { motion } from 'framer-motion'
import { useFetch } from '../hooks/useFetch'
import Card from '../components/Card'
import Button from '../components/Button'
import { 
  Package, 
  AlertTriangle, 
  Tag, 
  Truck,
  TrendingUp,
  ShoppingCart,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

export default function Dashboard() {
  const { data: products, loading } = useFetch('/products')

  // Mock data for dashboard
  const stats = [
    {
      title: 'Total Products',
      value: products?.length || 0,
      icon: Package,
      change: '+12%',
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Low Stock Items',
      value: '8',
      icon: AlertTriangle,
      change: '+2%',
      trend: 'up',
      color: 'red'
    },
    {
      title: 'Total Categories',
      value: '12',
      icon: Tag,
      change: '+5%',
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Total Suppliers',
      value: '24',
      icon: Truck,
      change: '+3%',
      trend: 'up',
      color: 'purple'
    }
  ]

  const recentActivities = [
    { id: 1, product: 'Wireless Mouse', action: 'Sale', quantity: -5, time: '2 min ago' },
    { id: 2, product: 'Mechanical Keyboard', action: 'Purchase', quantity: 20, time: '1 hour ago' },
    { id: 3, product: 'Monitor Stand', action: 'Sale', quantity: -2, time: '3 hours ago' },
    { id: 4, product: 'USB-C Cable', action: 'Purchase', quantity: 100, time: '5 hours ago' },
  ]

  const aiSuggestions = [
    { product: 'Wireless Mouse', currentStock: 8, recommended: 50 },
    { product: 'USB-C Cable', currentStock: 15, recommended: 100 },
    { product: 'Laptop Stand', currentStock: 5, recommended: 25 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your inventory.
          </p>
        </div>
        <Button>
          <ShoppingCart className="w-4 h-4 mr-2" />
          New Purchase
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                  <div className={`flex items-center mt-2 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    {stat.change} from last month
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Restock Suggestions */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              AI Restock Suggestions
            </h3>
            <TrendingUp className="w-5 h-5 text-primary-500" />
          </div>
          <div className="space-y-4">
            {aiSuggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.product}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {suggestion.product}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Current: {suggestion.currentStock} • Recommended: {suggestion.recommended}
                  </p>
                </div>
                <Button size="sm">
                  Order
                </Button>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.action === 'Sale' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.product}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.action} • {activity.time}
                    </p>
                  </div>
                </div>
                <span className={`font-medium ${
                  activity.quantity > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.quantity > 0 ? '+' : ''}{activity.quantity}
                </span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}