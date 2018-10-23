var numeros = 100;
// var divisible = false;

for(i = 1; i <= 100; i++)
{
  //divisible = false
  if (esDivisible(i,3))  //antes iva i % 3 == 0, == es comparar
  {
     document.write("Fizz");
     // divisible = true;
  }
  if(esDivisible(i,5))  // lo mismo que lo anterior
  {
    document.write("Buzz");
    // divisible = true;
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))                            // if(!divisible)
  {
    document.write(i);
  }
  document.write("<br />");  // salto de linea solamente tambien usar solo el br o para los depuradores /> tambien al final
}

function esDivisible(num, divisor) // variable vacias en el cual establecemos que dato ira despues de la , por ejemplo
{
    if (num % divisor == 0)
  {
    return true; //verdadero para que se ejecute la operacion con respecto a lo anterior puesto con el ciclo si
  }
  else
  {
    return false; // return cuando regresa a falso, encontes la linea "Muere" litarealmente y termina hasta ese punto
  }
}
