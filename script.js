/* Declaração de variáveis */
var
   i,
   lNumeroAleatorio;
var
   bttGerarNumero = document.getElementById('bttGerarNumero');
var
   iPalpiteUsuario   = document.getElementById('iPalpiteUsuario'),
   bttPalpiteUsuario = document.getElementById('bttPalpiteUsuario');

var
   vContagemTentativas  = document.createElement('p'),
   vValoresTentativas   = document.createElement('p'),
   vDicasTentativas     = document.createElement('p');

   /* Atribuição de valores */
   bttGerarNumero.addEventListener('click', fGerarNumeroAleatorio);

   /* Função: gerar um número aleatório, para interação do usuário, em tentar adivinhá-lo */
   function fGerarNumeroAleatorio()
   {
      i = 1;
      lNumeroAleatorio = (Math.floor(Math.random() * 100) + 1);
      console.log(lNumeroAleatorio);

      /* desabilitar botão */
      bttGerarNumero.disabled = true;
      /* habilitar campos para usuário */
      iPalpiteUsuario.disabled   = false;
      bttPalpiteUsuario.disabled = false
      /* atribuir função */
      bttPalpiteUsuario.addEventListener('click', fCompararValores);

      vValoresTentativas.textContent = ('Números informados: ');
   }

   /* Função: comparar o valor informado pelo usuário com o gerado pela função fGerarNumeroAleatorio */
   function fCompararValores()
   {
      let
         bttReiniciarJogo = document.createElement('button');
      bttReiniciarJogo.textContent = ('Reiniciar');
      bttReiniciarJogo.setAttribute('id', 'bttReiniciarJogo');
      bttReiniciarJogo.addEventListener('click', fReiniciarJogo);

      let
         lCompararValor = parseInt(iPalpiteUsuario.value);

      if(lCompararValor === lNumeroAleatorio)
      {
         vDicasTentativas.style.backgroundColor = ('green');

         /* inserir número de tentativas */
         vContagemTentativas.textContent = ('Número de tentativas: ' + i);
         /* inserir número de tentativas */
         vValoresTentativas.textContent += (iPalpiteUsuario.value);
         /* inserir dicas de tentativas */
         vDicasTentativas.textContent = ('Você acertou! O número gerado era: ' + lNumeroAleatorio);

         console.log('Valor correto');
         iPalpiteUsuario.value = ''; /* limpar campo */

         document.body.querySelector('.sccGame').appendChild(bttReiniciarJogo);
      }
         else if(lCompararValor !== lNumeroAleatorio)
         {
            vDicasTentativas.style.backgroundColor = ('red');
            if(i === 10)
            {
               /* inserir número de tentativas */
               vContagemTentativas.textContent = ('Número de tentativas: ' + i);
               /* inserir número de tentativas */
               vValoresTentativas.textContent += (iPalpiteUsuario.value + ' | ');
               /* inserir dicas de tentativas */
               vDicasTentativas.textContent = ('Você errou! O número gerado era: ' + lNumeroAleatorio);

               console.log('Suas tentativas acabaram.')
               iPalpiteUsuario.value = ''; /* limpar campo */

               document.body.querySelector('.sccGame').appendChild(bttReiniciarJogo);
            }
            else
            {
               if(lCompararValor > lNumeroAleatorio)
               {
                  /* inserir dicas de tentativas */
                  vDicasTentativas.textContent = ('Você errou! O número digitado é maior que o valor gerado.');
               }
               if(lCompararValor < lNumeroAleatorio)
               {
                  /* inserir dicas de tentativas */
                  vDicasTentativas.textContent = ('Você errou! O número digitado é menor que o valor gerado.');
               }
               /* inserir número de tentativas */
               vContagemTentativas.textContent = ('Número de tentativas: ' + i);
               /* inserir número de tentativas */
               vValoresTentativas.textContent += (iPalpiteUsuario.value + ' | ');

               console.log('Valor incorreto');
               iPalpiteUsuario.value = ''; /* limpar campo */

               i++;
            }
         }

      document.body.querySelector('.form').appendChild(vContagemTentativas);
      document.body.querySelector('.form').appendChild(vValoresTentativas);
      document.body.querySelector('.form').appendChild(vDicasTentativas);
   }
      /* Função: reiniciar o jogo */
      function fReiniciarJogo()
      {
         let
            lRemoverBtt = document.getElementById('bttReiniciarJogo');

         vContagemTentativas.textContent  = '';
         vValoresTentativas.textContent   = '';
         vDicasTentativas.textContent  = '';

         /* remover parágrafos criados */
         document.body.querySelector('.form').removeChild(vContagemTentativas);
         document.body.querySelector('.form').removeChild(vValoresTentativas);
         document.body.querySelector('.form').removeChild(vDicasTentativas);

         /* remover button "Reiniciar" */
         document.body.querySelector('.sccGame').removeChild(lRemoverBtt);

         /* desabilitar inserção de dados */
         iPalpiteUsuario.disabled = true;
         bttPalpiteUsuario.disabled = true;
         /* habilitar falsa ilusão de geração de novo número */
         bttGerarNumero.disabled = false;
      }