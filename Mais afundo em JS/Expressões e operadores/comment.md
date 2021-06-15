## EXPRESSÕES E OPERADORES ## 

__Expressions__

   # New 
   -- left-hand-side expression
   -- criar um novo objeto
   <!-- 
      let name = new String('Lucas') 
      let age = new Number(17)
      let date = new Date('2020-12-01')

      name.surName = "Gonçalves"
      console.log(name)
      console.log(name.surName)
      console.log(age)

      console.log(date)
   -->

   
__exemplo de uma função auto executavel__
<!--
        (function() {
            console.log('Hello word')
        })()
-->




__Operators__

   # Binary
   <!-- 
      number = 1;
      console.log(number + 1)
   -->

   # Unary
   -- typeof
   -- delete
   <!-- 
      console.log(typeof "Lucas") 
            
      const person = {
         name: "Lucas",
         surName: "Gonçalves",
         age: 17
      }

      delete person.age

      console.log(person)
   -->

   # Ternary
   <!-- 
      console.log(true ? 'true' : 'false') 
   -->

   # Grouping
   <!--
      let total = (2 + 3) * 5
      console.log(total)
   -->

   # String
   -- Comparison
   -- Concatenation
   <!--
      console.log('a' == 'a')
      console.log('a' + 'b')
   -->

   # Precedence
   -- grouping                   ( )
   -- negação e incremento       ! ++ ==
   -- multiplicação e divisão    * /
   -- adição e subtração         + -
   -- relacional                 < <= > >=
   -- igualdade                  == != === !==
   -- AND                        &&
   -- OR                         ||
   -- conditional                ?:
   -- assignment (atribuição)    = += -= *=

   # Logical
   -- 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso 
   <!--
      let pao = true
      let queijo = true

      console.log(pao && queijo)

      console.log(pao || queijo) 

   -->

   # Ternary
   -- Dependendo da condição recebemos valores diferentes
   <!---
      let condition = true

      console.log(condition ? "value 1" : "value 2") 
   -->

   # Assignment
   -- addition assignment
   -- subtraction
   -- multiplication
   -- division
   <!--
      let x = 1 
 
      x += 2
      x -= 1
      x *= 2
      x /= 2

      console.log(x)
   -->

   # Arithmetic
   -- multiplicação
   -- divisão
   -- soma
   -- subtração
   -- resto da divisão
   -- incremento
   -- decremento
   -- exponencial
   <!-- 
      '*', '/', '+', '-', '%', '++', '--', '**'

      console.log("Multiplicação:", 3 * 5 ) 

      console.log("Divisão:", 3 / 5 )

      console.log("Soma:", 3 + 5 )

      console.log("Subtração:", 3 - 5 )

      let remainder 
      remainder = 10 % 3 
      console.log("Remainder:", remainder)

      let increment = 0 
      increment ++
      console.log("Increment:", increment)

      let decrement = 2
      decrement --
      console.log("Decremento:", decrement)

      console.log("Exponencial:", 3 ** 3)
   -->
   
   # Comparison 
   -- Irá comparar valores e retornar um Boolean como resposta à comparação
   __Common__
   <!--
      let one = 1
      let two = 2 
      /* O valor de igual sozinho no JS pode ser lido como "recebe" */

      console.log(one == 1)
      console.log(two == 1)

      console.log(one != two)
      console.log(one != 1)
      console.log(one != "1")
   -->
   __Strict__
   <!-- 
      let one = 1
      let two = 2 

      console.log(one === 1)
      console.log(one === "1")

      console.log(two !== 2)
      console.log(two !== "2") 
   -->
   -- ">" Maior que: 
   -- ">=" Maior igual a:
   -- "<" Menor que:
   -- "<=" Menor igual a:
   <!--
      let one = 1
      let two = 2 

      console.log(one > two)

      console.log(one >= 1)
      console.log(tow >= 1)

      console.log(one < two)

      console.log(one <= two)
      console.log(one <= 1)
      console.log(one <= 0)

   -->