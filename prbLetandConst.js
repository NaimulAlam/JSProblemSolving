function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    // let r = readLine()
    const PI = Math.PI
    // Print the area of the circle:
    const area = PI * (r * r)
    console.log(area)
    // Print the perimeter of the circle:
    const perimeter = 2 * PI * r
    console.log(perimeter)
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main(5)