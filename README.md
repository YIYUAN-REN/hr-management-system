config in root module:  
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],  
  providers: [
    HttpServiceService
  ]  
  

Boarding backend:  

maven:  

        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>20190722</version>
        </dependency>
        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
        </dependency>
  
  controller:  
    
      
      
@RestController
@RequestMapping("/")
public class AngularController {
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/boarding")
    public void GetName(@RequestBody String test){
        System.out.println("Get Here!");
        System.out.println(test);
        JSONObject obj = new JSONObject(test);
        String pageName = obj.getJSONObject("name").getString("firstName");
        System.out.println(pageName);
    }
}
