    let nilai = [70, 85, 60, 90, 75, 50, 95]

    for (let i = 1; i <= nilai.length; i++) {

        if (nilai[i] >= 70) {
            console.log(nilai[i], "lulus");
        } else if (nilai[i] >= 85)  {
            console.log(nilai[i], "lulus");
            break;
        } else if (nilai[i] >= 90) {
            console.log(nilai, "lulus");
        } else if (nilai[i] >= 95){
            console.log(nilai[i], "lulus");
            continue;
        }else{
            console.log(nilai[i], "tidak lulus");
        }
    }