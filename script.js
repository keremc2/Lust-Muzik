document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini durdur

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const webhookURL = 'https://discordapp.com/api/webhooks/1290749888643993694/Put47byhHvtda2RI2UA_vBrT_wb5bb_xwlY_6bw7nxLV-qFLU2NZj5NhcAn56E9qNLp9'; // Discord webhook URL'nizi buraya ekleyin

    const payload = {
        content: `Yeni İletişim Formu Mesajı:\n**Ad:** ${name}\n**E-posta:** ${email}\n**Mesaj:** ${message}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').innerText = 'Mesajınız başarıyla gönderildi!';
        } else {
            throw new Error('Mesaj gönderilirken bir hata oluştu.');
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = error.message;
    });
});
