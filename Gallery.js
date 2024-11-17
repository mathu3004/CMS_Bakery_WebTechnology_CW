window.onload = function() {
    let testimonials_1 = [
        { image: "gal-1.jpg", title: "LIFE", name: "No one can understand the truth until he drinks of coffee’s frothy goodness.", text: "Sheik Abd-al-Kabir" },
        { image: "gal-2.jpg", title: "IS", name: "If it wasn’t for coffee, I’d have no discernible personality at all.", text: " David Letterman" },
        { image: "gal-3.jpg", title: "TOO", name: "Spread your wings and enjoy your failures", text: "Themiya Jayaratne" },
        { image: "gal-4.jpg", title: "SHORT", name: "Every layer speaks buttery volumes.", text: "" }
    ];

    let testimonials_2 = [
        { image: "gal-5.jpg", title: "TO", name: "Even bad coffee is better… than no coffee at all.", text: "David Lynch" },
        { image: "gal-6.jpg", title: "DRINK", name: "Revitalize your senses, one sip at a time", text: "" },
        { image: "gal-7.jpg", title: "BAD", name: "Coffee is a language in itself.", text: "Jackie Chan" },
        { image: "gal-8.jpg", title: "COFFEE", name: "Adventure in life is good. Consistency in coffee even better.", text: "Justina Headley" }
    ];

    let container_1 = document.querySelector('.container_1');
    let container_2 = document.querySelector('.container_2');

    testimonials_1.forEach(function(testimonial) {
        const box = createTestimonialBox1(testimonial);
        container_1.appendChild(box);
    });

    testimonials_2.forEach(function(testimonial) {
        const box = createTestimonialBox2(testimonial);
        container_2.appendChild(box);
    });

    function createTestimonialBox1(testimonial) {
        const box = document.createElement('div');
        box.classList.add('box');

        const image = document.createElement('img');
        image.src = testimonial.image;
        image.alt = testimonial.gal;

        const span = document.createElement('span');
        span.textContent = testimonial.title;

        const hvrDiv = document.createElement('div');
        hvrDiv.classList.add('hvr');

        const h1 = document.createElement('h1');
        h1.textContent = testimonial.name;

        const p = document.createElement('p');
        p.textContent = testimonial.text;

        hvrDiv.appendChild(h1);
        hvrDiv.appendChild(p);

        box.appendChild(image);
        box.appendChild(span);
        box.appendChild(hvrDiv);

        return box;
    }

    function createTestimonialBox2(testimonial) {
        const box = document.createElement('div');
        box.classList.add('box');

        const image = document.createElement('img');
        image.src = testimonial.image;
        image.alt = testimonial.gal;

        const span = document.createElement('span');
        span.textContent = testimonial.title;

        const hvrDiv = document.createElement('div');
        hvrDiv.classList.add('hvr');

        const h1 = document.createElement('h1');
        h1.textContent = testimonial.name;

        const p = document.createElement('p');
        p.textContent = testimonial.text;

        hvrDiv.appendChild(h1);
        hvrDiv.appendChild(p);

        box.appendChild(span);
        box.appendChild(image);
        box.appendChild(hvrDiv);

        return box;
    }
};