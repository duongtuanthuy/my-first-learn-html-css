const inputPGN = document.getElementById("inputPGN");
const translateBtn = document.getElementById("translate-btn");
const outputEl = document.getElementById("output");

function translateMove(move, isWhite) {
    const phe = (isWhite) ? "trắng":"đen";

    if (move === "O-O") return `Vua ${phe} nhập thành gần`;
    if (move === "O-O-O") return `Vua ${phe} nhập thành xa`;

    let quanCo = "Tốt";
    if (move.charAt(0) === 'K') quanCo = "Vua";
    else if (move.charAt(0) === 'Q') quanCo = "Hậu";
    else if (move.charAt(0) === 'R') quanCo = "Xe";
    else if (move.charAt(0) === 'B') quanCo = "Tượng";
    else if (move.charAt(0) === 'N') quanCo = "Mã";

    let phanConLai = (quanCo === "Tốt") ? move:(move.substring(1));

    let hanhDong = "di chuyển đến";
    if (phanConLai.includes('x')) hanhDong = "ăn quân tại";

    phanConLai = (hanhDong === "ăn quân tại") ? (phanConLai.replace('x', '')):phanConLai;

    let trangThai = '';
    if (phanConLai.charAt(phanConLai.length-1) === '+') trangThai = "và chiếu tướng";
    else if (phanConLai.charAt(phanConLai.length-1) === '#') trangThai = "và chiếu hết cờ";

    phanConLai = (trangThai !== '') ? phanConLai.slice(0, -1):phanConLai;

    let diemBatDau = '';
    if (phanConLai.length === 3) {
        if (phanConLai.charAt(0)<=8 && phanConLai.charAt(0) > 0) {
            diemBatDau = `hàng ${phanConLai.charAt(0)}`;
        } else {
            diemBatDau = `cột ${phanConLai.charAt(0)}`;
        }
        phanConLai = phanConLai.substring(1);
    }

    let toaDo = '';
    toaDo = phanConLai;

    return `${quanCo} ${phe} ${(diemBatDau!=='') ? "tại " + diemBatDau:diemBatDau} ${hanhDong} ${toaDo} ${trangThai}`;
}

translateBtn.addEventListener('click', () => {
    let moves = inputPGN.value
    .split(/\d+\.\s*/)
    .filter(Boolean)
    .map(item => item.trim())
    .flatMap(item => item.split(/\s+/));
    outputEl.innerHTML = '';
    let isWhite = true;
    let htmlresult = "";
    moves.forEach(move => {
        htmlresult += `<li>${translateMove(move, isWhite)}</li>`;
        isWhite = !(isWhite);
    });
    outputEl.innerHTML = htmlresult;
})