<template>
  <div class="main-content-area clearfix">

   
         <section class="section-padding  compare-detial gray ">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 col-xs-12 col-sm-12">
                  <div class="table-responsives">
                     <table class="selection-list" >
                        <tbody>
                           <tr>
                              <td>Select Car&#039;s You Want To Compare</td>
                              <td>
                                 <div class="form-group">
                                    <select id="keyword1" class=" form-control make">
                                       <option value="671" >Alfa Romeo 8C</option><option value="669" >Audi A5 Sport</option><option value="666" >2017 Toyota RAV4</option><option value="663" >renault suv 2016</option><option value="660" >2017 Honda CR-V</option><option value="658" >Mercedes-Benz C-Class</option><option value="649" >2017 Chevrolet Camaro</option><option value="647" >2016 Ford Escape Cape</option>                                    </select>
                                 </div>
                              </td>
                              <td>
                                 <div class="form-group">
                                    <select id="keyword2" name="keyword2" class="form-control make">
                                   		<option value="671" >Alfa Romeo 8C</option><option value="669" >Audi A5 Sport</option><option value="666" >2017 Toyota RAV4</option><option value="663" >renault suv 2016</option><option value="660" >2017 Honda CR-V</option><option value="658" >Mercedes-Benz C-Class</option><option value="649" >2017 Chevrolet Camaro</option><option value="647" >2016 Ford Escape Cape</option>                                    </select>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                            <td></td>
                           	<td colspan="2">
                            	<button type="button" class="btn btn-block btn-theme" id="comparison_button"> Comapre</button> 
                                </td>
                           </tr>
                        </tbody>
                     </table>
                     
                     <div id="populate_data"><table id="reviews-data"><tbody><tr>
                        <td>Images</td>
                        <td> <img class="img-responsive" alt="" src="https://carspot.scriptsbundle.com/wp-content/uploads/2017/07/5.png">
                         <h4>Mercedes-Benz C-Class</h4>
                         <i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i> <span class="star-score"> (<strong>5</strong>)</span>
                        </td>
                        <td><img class="img-responsive" alt="" src="https://carspot.scriptsbundle.com/wp-content/uploads/2017/07/6.png">
                        <h4>2017 Honda CR-V</h4>
                        <i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-ofa fa-star"></i><i class="fa fa-star-o"></i> <span class="star-score"> (<strong>4</strong>)</span>
                        </td>
                      </tr></tbody></table><ul class="accordion"><li id="first_accor" class="open"><h3 class="accordion-title"><a href="#" class="accord-title-link">General</a></h3><div class="accordion-content" style="display: block;"><table><tbody><tr>
                         <td> Engine Type </td>
                         <td> 211-hp, 2.0-liter I-4 (premium)</td>
                         <td> 200-hp, 2.0-liter I-4 (premium)</td>
                       </tr> <tr>
                         <td> Fuel Type </td>
                         <td> Petrol</td>
                         <td> Diesel</td>
                       </tr> <tr>
                         <td> Price </td>
                         <td> $75,000</td>
                         <td> $35,000</td>
                       </tr> <tr>
                         <td> Transmission </td>
                         <td> Automatic</td>
                         <td> Manual</td>
                       </tr> <tr>
                         <td> Vehicle Type </td>
                         <td> Coupe</td>
                         <td> SUV</td>
                       </tr> </tbody></table></div></li><li id="first_accor"><h3 class="accordion-title"><a href="#">Engine</a></h3><div class="accordion-content"><table><tbody><tr>
                         <td> Displacement </td>
                         <td> 998 cc</td>
                         <td> 1200 cc</td>
                       </tr> <tr>
                         <td> Engine size </td>
                         <td> 1.0 L</td>
                         <td> 14.0 L</td>
                       </tr> <tr>
                         <td> No Of Cylinders </td>
                         <td> 3</td>
                         <td> 4</td>
                       </tr> <tr>
                         <td> Super Charger </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-times"></i></td>
                       </tr> <tr>
                         <td> Turbo Charger </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Valves Per Cylinder </td>
                         <td> 12</td>
                         <td> 16</td>
                       </tr> </tbody></table></div></li><li id="first_accor"><h3 class="accordion-title"><a href="#">Performance</a></h3><div class="accordion-content"><table><tbody><tr>
                         <td> Acceleration </td>
                         <td> 10.5 Seconds</td>
                         <td> 16.5 Seconds</td>
                       </tr> <tr>
                         <td> Max Output (HP) </td>
                         <td> 66 hp @ 6,000 rpm</td>
                         <td> 70 hp @ 6,000 rpm</td>
                       </tr> <tr>
                         <td> Max Torque (Nm) </td>
                         <td> 89 Nm @ 4,400 rpm</td>
                         <td> 70 Nm @ 4,400 rpm</td>
                       </tr> <tr>
                         <td> Mileage City </td>
                         <td> 11.2</td>
                         <td> 17.2</td>
                       </tr> <tr>
                         <td> Mileage Highway </td>
                         <td> 15.2</td>
                         <td> 13.2</td>
                       </tr> <tr>
                         <td> Power Train </td>
                         <td> Front-Wheel Drive sonu</td>
                         <td> Front-Wheel Drive</td>
                       </tr> <tr>
                         <td> Top Speed </td>
                         <td> 165 kmph</td>
                         <td> 195 kmph</td>
                       </tr> </tbody></table></div></li><li id="first_accor"><h3 class="accordion-title"><a href="#">Features</a></h3><div class="accordion-content"><table><tbody><tr>
                         <td> Air Conditioning System </td>
                         <td> Manual Dial Cooler</td>
                         <td> Manual</td>
                       </tr> <tr>
                         <td> Connectivity </td>
                         <td> USB port and Aux-in</td>
                         <td> USB port and Aux-in</td>
                       </tr> <tr>
                         <td> Cruise Control </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Entertainment System </td>
                         <td> Navi-ready display audio</td>
                         <td> Navi-ready display audio</td>
                       </tr> <tr>
                         <td> Front Parking Sensors </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Power Steering </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Power Windows </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Push Start Button </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Rear Parking Sensors </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Roof Rack </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Sunroof </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Warranty </td>
                         <td> 3 Years (100,000 km)</td>
                         <td> 5 Years (100,000 km)</td>
                       </tr> <tr>
                         <td> Wheel Metal Type </td>
                         <td> Alloy</td>
                         <td> Aluminum</td>
                       </tr> <tr>
                         <td> Wheel Size </td>
                         <td> 14 in</td>
                         <td> 16 in</td>
                       </tr> </tbody></table></div></li><li id="first_accor"><h3 class="accordion-title"><a href="#">Safety &amp; Security</a></h3><div class="accordion-content"><table><tbody><tr>
                         <td> ABS </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Driver's Airbag </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Electronic Brake Distribution </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Electronic Door Locks </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Front Passenger's Airbag </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Immobilizer </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Security Alarm </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Side Airbag </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> <tr>
                         <td> Stability Control </td>
                         <td> <i class="fa fa-times"></i></td>
                         <td> <i class="fa fa-check"></i></td>
                       </tr> </tbody></table></div></li></ul></div>
                  </div>  
                  </div>
               </div>
            </div>
         </section>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>