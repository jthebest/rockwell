import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-scrape',
  templateUrl: './scrape.component.html',
  styleUrls: ['./scrape.component.css']
})



export class ScrapeComponent implements OnInit  {
  myForm1: FormGroup;
  error: string | undefined;
  fileService: any;
  public async methodToRun() {
    console.log("King Chronos");
  }
  constructor(private fb: FormBuilder, private http: HttpClient) {

    //this.example = new CronJobExample();
    this.myForm1 = this.fb.group({
      'url': ['', Validators.required],
      'cron': ['', [Validators.required]]
    });
    

  }

  ngOnInit() {
    console.log("yes");
  }


downloadFiles(urlScrap:string,cronScrap:string) {
  const dataurl=  "import os"+"\n"+
  "import requests"+"\n"+
  "\n"+
  "def jobScrap(url):"+"\n"+
  "    try:"+"\n"+
  "        response = requests.get(url)"+"\n"+
  "        print('Ping Successful!')"+"\n"+
  "        print('Headers:')"+"\n"+
  "        print(response.headers)"+"\n"+
  "        print('First 1000 characters of the response:')"+"\n"+
  "        print(response.text[:1000])"+"\n"+
  "    except Exception as e:"+"\n"+
  "        print(f'An error occurred: {e}')"+"\n"+
  "\n"+
  "# Replace 'url' with your values"+"\n"+
  "jobScrap("+urlScrap+")"+"\n";

  const bloburl = new Blob([dataurl], { type: 'text/plain' });
  const urlscrap= window.URL.createObjectURL(bloburl);
  const linkurl = document.createElement('a');
  linkurl.href = urlscrap;
  linkurl.download = 'scriptScrap2WSL.py';
  linkurl.click();

  const data=  "import os"+"\n"+
  "from crontab import CronTab"+"\n"+
  "\n"+
  "def schedule_job(cron_expression, url):"+"\n"+
  "    with CronTab(user='username') as cron:"+"\n"+
  "        job = cron.new(command='python /path/to/your/scriptScrap2WSL.py')"+"\n"+
  "        job.setall(cron_expression)"+"\n"+
  "\n"+
  "# Replace 'cron_expression' and 'url' with your values"+"\n"+
  "schedule_job('"+cronScrap+"', "+urlScrap+")"+"\n";

  const blob = new Blob([data], { type: 'text/plain' });
  const url= window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'scriptCron2WSL.py';
  link.click();
}



  onSubmit() {
    console.log("mp");
    
    if (this.myForm1.valid) {

      const headers = new HttpHeaders({
      });
      let queryParams = new HttpParams();
      queryParams = queryParams.append("url",this.myForm1.controls['url'].value );
      queryParams = queryParams.append("cron",this.myForm1.controls['cron'].value );
      this.http.get('https://hg7xygvm17.execute-api.us-east-2.amazonaws.com/five/crontaskrock',
      { headers,params:queryParams,responseType: 'text' }).subscribe(
        (response) => { console.log(response);  
                  this.downloadFiles(this.myForm1.controls['cron'].value ,
        this.myForm1.controls['url'].value );

                         },
        (error) => { console.log(error); });

    } else {
      console.log('Form is not valid');
    }
  }
}