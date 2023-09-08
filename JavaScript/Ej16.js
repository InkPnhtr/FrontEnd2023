async function fillVectorsAsync() {
    // Create two empty arrays to store the results
    let vector1 = [];
    let vector2 = [];

    
    

    // Define a function to fill the first vector asynchronously
    async function fillVector1() {
        return new Promise((resolve) => {
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    vector1.push(i);
                    console.log("Lennando V1", vector1);
                }
                resolve();
            }, 5000); // Simulate an async operation (e.g., fetching data)
        });
    }

    // Define a function to fill the second vector asynchronously
    async function fillVector2() {
        return new Promise((resolve) => {
            setTimeout(() => {
                for (let i = 5; i < 10; i++) {
                    vector2.push(i);
                }
                resolve();
            }, 1500); // Simulate another async operation
        });
    }

    // Use async/await to fill both vectors asynchronously
    try {
        for (let j = 0; j<5; j++){
            await fillVector1();
            console.log("--------------------------------");
        }
        
        await fillVector2();

        // Both vectors are filled asynchronously
        var paragraph = document.createElement("p");

        // Step 1: Create a template string with a variable
        var htmlString = `<p>Vector 1: ${vector1}.</p> <br>
        <p>Vector 2: ${vector2}.</p>`;
        paragraph.innerHTML = htmlString;

        // Step 3: Insert the <p> element into the DOM
        // You need to specify where you want to insert it. For example, you can insert it into the body of the document.
        document.body.appendChild(paragraph);
        console.log("Vector 1:", vector1);
        console.log("Vector 2:", vector2);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fillVectorsAsync();
