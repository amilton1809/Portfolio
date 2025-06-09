"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaServer } from 'react-icons/fa';

const Mechanics = () => {
  // Definindo o tipo para as chaves do tabContent
  type TabContentKey = 'components' | 'animations' | 'performance' | 'api';
  
  const [activeTab, setActiveTab] = useState<TabContentKey>('components');
  
  const tabs = [
    { id: 'components' as TabContentKey, label: 'Componentes Reutilizáveis', icon: <FaCode /> },
    { id: 'animations' as TabContentKey, label: 'Animações & Transições', icon: <FaLaptopCode /> },
    { id: 'performance' as TabContentKey, label: 'Otimização de Performance', icon: <FaRocket /> },
    { id: 'api' as TabContentKey, label: 'Integração com APIs', icon: <FaServer /> }
  ];
  
  const tabContent = {
    components: {
      title: "Componentes Reutilizáveis",
      description: "Desenvolvimento de componentes modulares que podem ser facilmente reutilizados em diferentes partes da aplicação, garantindo consistência e facilitando a manutenção.",
      code: `// Exemplo de componente de botão reutilizável
import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ variant, size, children, onClick }: ButtonProps) => {
  const baseClasses = "rounded-md font-medium transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg"
  };
  
  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;`,
      explanation: "Este componente de botão é altamente reutilizável, aceitando diferentes variantes, tamanhos e conteúdos. A abordagem de composição de classes com Tailwind CSS permite fácil personalização e manutenção."
    },
    animations: {
      title: "Animações & Transições",
      description: "Implementação de animações fluidas e transições suaves para melhorar a experiência do usuário e tornar a interface mais dinâmica e interativa.",
      code: `// Exemplo de animação com Framer Motion
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: { 
    y: -10,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const Card = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};`,
      explanation: "Este exemplo demonstra como usar Framer Motion para criar animações de entrada e interações de hover em um componente de card. As variantes permitem definir diferentes estados de animação de forma organizada."
    },
    performance: {
      title: "Otimização de Performance",
      description: "Técnicas e estratégias para melhorar a performance de aplicações React, garantindo carregamento rápido e experiência fluida para os usuários.",
      code: `// Exemplo de otimização com React.memo e useCallback
import React, { useCallback, useState } from 'react';

// Componente filho otimizado com React.memo
const ExpensiveComponent = React.memo(({ onClick, data }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      <h3>Dados processados:</h3>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={onClick}>Atualizar</button>
    </div>
  );
});

// Componente pai com useCallback
const PerformanceExample = () => {
  const [count, setCount] = useState(0);
  const [data] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  
  // Função memoizada que só muda quando dependências mudam
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);
  
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      
      <ExpensiveComponent 
        onClick={handleClick}
        data={data}
      />
    </div>
  );
};`,
      explanation: "Este exemplo demonstra duas técnicas importantes de otimização em React: React.memo para evitar renderizações desnecessárias de componentes e useCallback para memoizar funções. Isso é especialmente útil em componentes que processam grandes volumes de dados ou realizam cálculos complexos."
    },
    api: {
      title: "Integração com APIs",
      description: "Implementação de comunicação eficiente com APIs externas, utilizando boas práticas de gerenciamento de estado e tratamento de erros.",
      code: `// Exemplo de integração com API usando React Query
import { useQuery, useMutation, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

// Cliente para gerenciar cache e estado das requisições
const queryClient = new QueryClient();

// Hook personalizado para buscar dados
const useUsers = () => {
  return useQuery('users', async () => {
    const { data } = await axios.get('https://api.example.com/users');
    return data;
  });
};

// Hook personalizado para criar usuário
const useCreateUser = () => {
  return useMutation(
    async (newUser) => {
      const { data } = await axios.post('https://api.example.com/users', newUser);
      return data;
    },
    {
      // Invalidar cache após mutação bem-sucedida
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      }
    }
  );
};

// Componente que utiliza os hooks
const UserList = () => {
  const { data: users, isLoading, error } = useUsers();
  const createUser = useCreateUser();
  
  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar usuários</div>;
  
  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button
        onClick={() => createUser.mutate({ name: 'Novo Usuário' })}
        disabled={createUser.isLoading}
      >
        {createUser.isLoading ? 'Adicionando...' : 'Adicionar Usuário'}
      </button>
    </div>
  );
};

// Componente raiz com provider
const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserList />
  </QueryClientProvider>
);`,
      explanation: "Este exemplo demonstra como usar React Query para gerenciar o estado de requisições a APIs, incluindo cache, revalidação automática e tratamento de estados de carregamento e erro. Esta abordagem simplifica significativamente a integração com APIs em comparação com soluções manuais usando useEffect e useState."
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="mecanicas" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Soluções & Mecânicas
        </motion.h2>
        
        <motion.div 
          className="mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-700 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`mechanics-tab flex items-center ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {tabContent[activeTab].description}
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
              <pre className="text-gray-300 text-sm">
                <code>{tabContent[activeTab].code}</code>
              </pre>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-lg font-medium mb-2 text-secondary">Explicação</h4>
              <p className="text-gray-300">
                {tabContent[activeTab].explanation}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mechanics;
