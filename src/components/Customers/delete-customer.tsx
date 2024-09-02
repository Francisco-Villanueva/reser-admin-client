'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { CustomerServices } from '../../services/customer.services'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
export function DeleteCustomer({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await CustomerServices.delete(id)
      location.reload()
      // Handle success, e.g., refresh the list or show a success message
    } catch (error) {
      console.error('Failed to delete customer:', error)
      // Handle error, e.g., show an error message
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive" disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : <Trash2 className="size-2" />}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to delete this customer?
          </DialogDescription>
          <div className="mt-4 flex justify-end space-x-4">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
