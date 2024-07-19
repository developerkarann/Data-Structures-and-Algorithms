

function HeadAndTailRecurion(data) {

    console.log(data)

    if (data > 0) {
        HeadAndTailRecurion(data - 1)
    }

    console.log(data)

}

const data = 5;

HeadAndTailRecurion(data)