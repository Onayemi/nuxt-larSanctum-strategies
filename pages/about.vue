<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-3 col-md-6 card mx-3 mb-3 md-3 mt-5 card-width">
                <img src="~assets/images/download.png" class="card-img-top" alt="remlex download">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col-md-3 col-md-6 card mx-3 mb-3 md-3 mt-5 card-width">
                <img src="~assets/images/design.jpg" class="card-img-top img-fluid" alt="remlex download">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col-md-3 col-md-6 card mx-3 mb-3 md-3 mt-5 card-width">
                <img src="~assets/images/download.png" class="card-img-top img-fluid" alt="remlex download">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col-md-3 col-md-6 card mx-3 mb-3 md-3 mt-5 card-width">
                <img src="~assets/images/design.jpg" class="card-img-top" alt="remlex download">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 col-md-6 mb-2">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="col-md-3 col-md-6 mb-2">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="col-md-3 col-md-6 mb-2">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary" @click="test()">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="col-md-3 col-md-6 mb-2">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div>


        <section id="questions" class="p-5">
            <div class="container">
                <h2 class="text-center mb-4">
                    Frequently Asked Questions
                </h2>
                <div class="accordion accordion-flush" id="question">
                    <!-- item 1 -->
                    <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                        Where exactly are you located?
                        </button>
                    </h2>
                    <div id="question-one" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#question">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio quia cumque, necessitatibus sunt ex eius quo deserunt est quaerat veritatis dolor nam animi illum praesentium eveniet optio? Perferendis possimus non suscipit blanditiis iure, deserunt cupiditate rerum illo doloremque quas earum porro aut voluptas fuga excepturi delectus. Perspiciatis, veritatis fugiat.
                        </div>
                    </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                            how much does it cost to attend?
                        </button>
                        </h2>
                        <div id="question-two" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#question">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio quia cumque, necessitatibus sunt ex eius quo deserunt est quaerat veritatis dolor nam animi illum praesentium eveniet optio? Perferendis possimus non suscipit blanditiis iure, deserunt cupiditate rerum illo doloremque quas earum porro aut voluptas fuga excepturi delectus. Perspiciatis, veritatis fugiat.
                        </div>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                            What do I need to know?
                        </button>
                        </h2>
                        <div id="question-three" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#question">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio quia cumque, necessitatibus sunt ex eius quo deserunt est quaerat veritatis dolor nam animi illum praesentium eveniet optio? Perferendis possimus non suscipit blanditiis iure, deserunt cupiditate rerum illo doloremque quas earum porro aut voluptas fuga excepturi delectus. Perspiciatis, veritatis fugiat.
                        </div>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-four">
                            How do I sign up?
                        </button>
                        </h2>
                        <div id="question-four" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#question">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio quia cumque, necessitatibus sunt ex eius quo deserunt est quaerat veritatis dolor nam animi illum praesentium eveniet optio? Perferendis possimus non suscipit blanditiis iure, deserunt cupiditate rerum illo doloremque quas earum porro aut voluptas fuga excepturi delectus. Perspiciatis, veritatis fugiat.
                        </div>
                        </div>
                    </div>
                    <!-- Item 5 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                            Do you help me find a job?
                        </button>
                        </h2>
                        <div id="question-five" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#question">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio quia cumque, necessitatibus sunt ex eius quo deserunt est quaerat veritatis dolor nam animi illum praesentium eveniet optio? Perferendis possimus non suscipit blanditiis iure, deserunt cupiditate rerum illo doloremque quas earum porro aut voluptas fuga excepturi delectus. Perspiciatis, veritatis fugiat.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    methods: {
        test(){
            alert('Testing')
        }
    }
}
</script>

<style scoped>
    .card-width {
        width: 280px;
    }
</style>