    // setup 
    const data = {  
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Weekly Sales',
            data: [ 
                { days: 'Mon', products: { sales: 1, link: 'https://www.google.com' } },
                { days: 'Tue', products: { sales: 2, link: 'https://www.youtube.com' } },
                { days: 'Wed', products: { sales: 3, link: 'https://github.com' } },
                { days: 'Thu', products: { sales: 4, link: 'https://play.google.com/store/games?hl=pt-BR&tab=r8' } },
                { days: 'Fri', products: { sales: 5, link: 'https://www.chartjs.org/docs/latest/charts/bar.html' } },
                { days: 'Sat', products: { sales: 6, link: 'https://www.chartjs.org/docs/latest/samples/scales/time-combo.html' } },
                { days: 'Sun', products: { sales: 7, link: 'https://nfe.etransparencia.com.br/sp.taboaodaserra/nfe/principal.aspx' } },
            ],
          backgroundColor: [
            'rgba(255, 26, 104, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(0, 0, 0, 0.5)'
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1,
          yAxisID: 'dollars',
          order: 2
        },
        {
          label: 'Weekly Sales in Quantity',
          data: [18, 12, 6, 9, 12, 3, 9],
          backgroundColor: [
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(0, 0, 0, 1)'
          ],
          type: 'line',
          yAxisID: 'quantity',
          order: 1
        }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            dollars: {
              beginAtZero: true,
              type: 'linear',
              position: 'left'
            },
            parsing:{
                xAxisKey: 'days',
                yAxisKey: 'products.sales'
            },
            quantity: {
              beginAtZero: true,
              type: 'linear',
              position: 'right',
              grid:{
                  display: false
              }
            },
            scales: {
                y: {
                  beginAtZero: true
                }
              }
          }
        }
      };
  
    // Função para quando clicar identificar a teg canvas:
    const ctx = document.getElementById('myChart')
    // render init block
    const myChart = new Chart(
      ctx,
      config
    );

    function clickHandler(click){
        const points = myChart.getElementsAtEventForMode(
            click, 
            'nearest',
            { intersect: true}, 
            true
        );
        if(points.length){
            const firstPoint = points[0];
            // console.log(points)
            console.log(firstPoint)
            const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index]

            console.log(value.products.link)
            // Utilizar apenas esse atributo se quiser abrir o link na mesma pagina:
            // location.href = value.products.link

            // Utilizar esse atributo se quiser abrir o link em uma nova janela:
            window.open(value.products.link)
        }
    }
    ctx.onclick = clickHandler