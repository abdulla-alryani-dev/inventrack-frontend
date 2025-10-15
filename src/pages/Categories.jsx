
import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', productCount: 45 },
    { id: 2, name: 'Accessories', productCount: 23 },
    { id: 3, name: 'Furniture', productCount: 15 },
  ])

  const handleDelete = (categoryId) => {
    setCategories(categories.filter(cat => cat.id !== categoryId))
    alert('Category deleted successfully')
  }

  const handleAddCategory = () => {
    alert('Category added successfully')
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Categories</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage product categories</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.productCount} products</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(category.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Category">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="flex space-x-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCategory}>
              Add Category
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
