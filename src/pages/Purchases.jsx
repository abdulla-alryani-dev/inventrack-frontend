
import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { Plus } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Purchases() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const purchases = [
    { id: 1, product: 'Wireless Mouse', supplier: 'TechCorp', quantity: 50, total: 1299.50, date: '2024-01-15' },
    { id: 2, product: 'USB-C Cable', supplier: 'Global Supplies', quantity: 100, total: 1599.00, date: '2024-01-12' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Purchases</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage purchase orders</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Purchase
        </Button>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Supplier</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{purchase.product}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{purchase.supplier}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{purchase.quantity}</td>
                  <td className="py-3 px-4 text-green-600 font-medium">${purchase.total}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{purchase.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Purchase">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Product</label>
            <select className="w-full px-3 py-2 border rounded-lg">
              <option>Select Product</option>
              <option>Wireless Mouse</option>
              <option>Mechanical Keyboard</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input type="number" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="flex space-x-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              toast.success('Purchase created successfully')
              setIsModalOpen(false)
            }}>
              Create Purchase
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
