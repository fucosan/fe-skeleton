import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router'
import { fallback, zodValidator } from '@tanstack/zod-adapter'
import { useState } from 'react';
import { z } from 'zod';
import { getHelloWorld } from '@/queries/getHelloWorld'

const nameSchema = z.string().max(10).optional();

const helloWorldSearchSchema = z.object({
  name: fallback(nameSchema, '')
});

type HelloWorldSearch = z.infer<typeof helloWorldSearchSchema>;

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: zodValidator(helloWorldSearchSchema)
});

function RouteComponent() {
  const { name } = Route.useSearch();
  const [stateName, setStateName] = useState(name);
  const [error, setError] = useState('');

  const { data, isLoading, isFetching } = useQuery(getHelloWorld<HelloWorldSearch>({ name }))
  const loading = isFetching || isLoading;

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateName(e.target.value);
    const validateResult = nameSchema.safeParse(e.target.value);
    if (!validateResult.success) {
      setError(validateResult.error.errors[0].message);
    }
  };

  return (
    <div className='flex flex-col'>
      <input
        type='text'
        value={stateName}
        onChange={onNameChange}
      />
      <span>{error}</span>
      <Link
        className='bg-blue-500 text-white p-2'
        to='.'
        search={{ name: stateName }}
      >change name
      </Link>
      <div>Hello {`${name} , your message: ${data?.message} ${loading ? 'loading' : ''}`}!</div>
    </div>
  );
}
