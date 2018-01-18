var countdownGenerator = function (x)
{

var output=['T-minus', 'Blast Off!', 'Rockets already gone, bub!'];


var counter = 1-x;

    return function()
    {
      if(counter<1)
      {
        counter++;
        console.log((output[0] + ' ' + x +'...'));
        x--;

      }
      else
      {
        if ( counter < 3)
        {
        console.log((output[counter]));

        counter ++;
        }

        else
          {
            console.log((output[2]));;
          }
      }

    };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
