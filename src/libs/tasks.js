export function loadLists() {
  return [
    { 
      title: 'Pendência', 
      creatable: true,
      cards: [
        {
          id: 1,
          title: "Contas",
          content: 'Pagar contas de Luz e agua.',
          tags: ['#f44336'],
        },
        {
          id: 2,
          title: "Lavar Louça",
          content: 'Lavar para não apanhar da esposa.',
          tags: ['#4caf50'],
        },
        
      ]
    },
    { 
      title: 'Fazendo',
      cards: [
        {
          id: 3,
          title: "Projeto",
          content: 'Dando o maximo no projeto.',
          tags: ['#ffc107']
          
        },
        
        
      ]
    },
    { 
      title: 'Feito',
      cards: [
        {
          id: 4,
          title: "Enviar Projeto",
          content: 'Enviar Projeto para Leo analisar!',
          tags: ['#f44336']
        },
        
      ]
    },
  ];
}