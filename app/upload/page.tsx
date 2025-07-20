import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {

  return (
    <div className='max-w-md mx-auto p-6'>
        <h1 className='mb-6 text-2xl font-bold text-center'>Upload Video</h1>
        <form className=''>
            <div className='mb-4'>
            <Label>Title</Label>
            <Input 
            type='text'
            name='title'
            placeholder='Enter title'
            className='mt-1'
            />
            </div>
            <div className='mb-4'>
            <Label>Description</Label>
            <Input 
            type='text'
            name='description'
            placeholder='Enter Description'
            className='mt-1'
            />
            </div>
            <div className='mb-4'>
            <Label>Upload file</Label>
            <Input 
            type='file'
            className='mt-1'
            />
            </div>
            <Button>Upload</Button>
        </form>
    </div>
  )
}

export default page