<!DOCTYPE html>

<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta charset="utf-8">
	
		<title>ReImagine Newton</title>
		<link rel="stylesheet" href="src/css/bootstrap.css">
		<link rel="stylesheet" href="src/css/site.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

	  <!--[if lt IE 9]>
	  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	  <![endif]-->
	</head>

	<body>
		<div class="container" style="margin-top: 15px;">
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> ReImagine Newton</a>
			    </div>
			    <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">
			      <ul class="nav navbar-nav">
			        <li><a href="#">Home <span class="sr-only">(current)</span></a></li>
					<li><a href="#news">About</a></li>
			        <li><a href="#donate">Donate</a></li>
					<li><a href="#news">News</a></li>
					<li><a href="#media">Media</a></li>
					<li><a href="#contact">Contact</a></li>
			      </ul>
				  <ul class="nav navbar-nav navbar-right">
					  <li><a href="#" class="fa fa-facebook fa-lg"></a></li>
					  <li><a href="#" class="fa fa-twitter fa-lg"></a></li>
					  <li><a href="#" class="fa fa-envelope fa-lg"></a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
			<div class="well" style="border: 1px solid #2c3e50">
				<div class="jumbotron">
				  <h1 style="font-size: 55px;">We are ReImagine Newton.</h1>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque dapibus elit, vitae maximus elit tincidunt non. </p>
				  <p><a href="#about" class="btn btn-primary btn-lg">Learn more</a></p>
				</div>
				<div class="row">
					<div class="col-md-8">
						<div class="panel panel-info" id="about">
							<div class="panel-heading">
								<h3 class="panel-title">
									<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Who are we?
								</h3>
							</div>
							<div class="panel-body">
								<img src="http://th3applek1d.ga/i/reimagine.png"</img><br>
								<h2>
									Here's who we are, and here is what we do.
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque dapibus elit, vitae maximus elit tincidunt non. Aenean luctus libero quis arcu fermentum, eu tristique sem aliquam. Cras dignissim rutrum aliquet. Nunc in mi vel lectus imperdiet cursus. Praesent ultricies mollis lorem, et mattis nulla molestie quis. Suspendisse egestas rhoncus sem, vel tempor sem sodales at. Nulla tempor felis ac accumsan lacinia. Quisque ut ultrices lectus, a gravida nibh. Cras maximus ligula risus, ac viverra ante ultricies non. Sed feugiat, diam at venenatis venenatis, ligula nunc facilisis tortor, in pellentesque metus nibh nec odio. Nunc pretium tortor tellus, nec pellentesque elit rutrum nec. Morbi ornare nibh ac metus mattis, a placerat orci elementum.
								
								</p>
							</div>
						</div>
						<div class="panel panel-info"  id="media">
							<div class="panel-heading">
								<h3 class="panel-title">
									<span class="glyphicon glyphicon-play" aria-hidden="true"></span> Media
								</h3>
							</div>
							<div class="panel-body">
									<blockquote>
									  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
									  <small>Tyler Darby in <cite title="Source Title">Covington News</cite></small>
									</blockquote>
									<blockquote>
									  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
									  <small>Steve Jobs in <cite title="Source Title">The Infinite Loop</cite></small>
									</blockquote>
									<iframe width="560" height="315" src="https://www.youtube.com/embed/0vrdgDdPApQ" frameborder="0" allowfullscreen></iframe>
							</div>
						</div>
						<div class="panel panel-info" id="donate">
							<div class="panel-heading">
								<h3 class="panel-title">
									<span class="glyphicon glyphicon-heart" aria-hidden="true"></span> Donate
								</h3>
							</div>
							<div class="panel-body">
								<form class="form-horizontal">
								  <fieldset>
									<div class="form-group">
									  <label class="col-lg-2 control-label">Name</label>
									  <div class="col-lg-10">
										<input type="text" class="form-control" id="inputEmail" placeholder="Name">
									  </div>
									</div>
									<div class="form-group">
									  <label class="col-lg-2 control-label">Donation Amount</label>
									  <div class="col-lg-10">
										<input type="number" class="form-control" placeholder="$0.00">
									  </div>
									</div>
									<div class="form-group">
									  <label class="col-lg-2 control-label">Comments</label>
									  <div class="col-lg-10">
										<textarea class="form-control" rows="3" id="textArea"></textarea>
										<span class="help-block">Place any comments or concerns about your donation here.</span>
									  </div>
									</div>
									<div class="form-group">
									  <label for="select" class="col-lg-2 control-label">Recurring Donations</label>
									  <div class="col-lg-10">
										<select class="form-control" id="select">
										  <option>Do Not Recur</option>
										  <option>Recur Monthly</option>
										  <option>Recur Every 3 Months</option>
										  <option>Recur Every 6 Months</option>
										  <option>Recur Yearly</option>
										</select>
									  </div>
									</div>
									<div class="form-group">
									  <div class="col-lg-10 col-lg-offset-2">
										<button type="reset" class="btn btn-default">Cancel</button>
										<button type="submit" class="btn btn-primary">Submit</button>
									  </div>
									</div>
								  </fieldset>
								</form>
							</div>
						</div>
						<div class="panel panel-info" id="contact">
							<div class="panel-heading">
								<h3 class="panel-title">
									<span class="glyphicon glyphicon-user" aria-hidden="true"></span> Contact
								</h3>
							</div>
							<div class="panel-body">
								<form class="form-horizontal">
								  <fieldset>
									<div class="form-group">
									  <label for="inputEmail" class="col-lg-2 control-label">Email</label>
									  <div class="col-lg-10">
										<input type="text" class="form-control" id="inputEmail" placeholder="Email">
									  </div>
									</div>
									<div class="form-group">
									  <label for="inputPassword" class="col-lg-2 control-label">Name</label>
									  <div class="col-lg-10">
										<input type="text" class="form-control" id="inputPassword" placeholder="Name">
									  </div>
									</div>
									<div class="form-group">
									  <label for="textArea" class="col-lg-2 control-label">Comments</label>
									  <div class="col-lg-10">
										<textarea class="form-control" rows="3" id="textArea"></textarea>
										<span class="help-block">What would you like to speak with us about?</span>
									  </div>
									</div>
									<div class="form-group">
									  <div class="col-lg-10 col-lg-offset-2">
										<button type="reset" class="btn btn-default">Cancel</button>
										<button type="submit" class="btn btn-primary">Submit</button>
									  </div>
									</div>
								  </fieldset>
								</form>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="panel panel-success">
						  <div class="panel-heading">
							<h3 class="panel-title"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Upcoming Events</h3>
						  </div>
						  <div class="panel-body">
								<div class="well well-sm" style="border: 1px solid #3498db">
								  <h4>
								  <strong>Event</strong>	 
								  </h4>
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus lacus vel est malesuada vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</div>
								<div class="well well-sm"  style="border: 1px solid #3498db">
								  <h4>
								  <strong>Event</strong>	 
								  </h4>
								  Donec purus dui, iaculis ut erat volutpat, rhoncus auctor ante. Mauris lectus nisl, vulputate et augue in, cursus rhoncus urna.
								</div>
								<div class="well well-sm"  style="border: 1px solid #3498db">
							      <h4>
								  <strong>Event</strong>	 
								  </h4>
								  Morbi leo nunc, venenatis et venenatis sed, ullamcorper ac arcu. Donec urna odio, sollicitudin vitae lectus id, pretium aliquam leo.
								</div>
								<div class="well well-sm"  style="border: 1px solid #3498db">
								  <h4>
								  <strong>Event</strong>	 
								  </h4>
								  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porttitor dui vitae justo posuere pulvinar facilisis faucibus sem
								</div>
								<div class="well well-sm"  style="border: 1px solid #3498db">
								  <h4>
								  <strong>Event</strong>	 
								  </h4>
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et fringilla purus, in varius ex.
								</div>
						  </div>
						</div>
						<a class="twitter-timeline" href="https://twitter.com/ReImagineNewton" data-widget-id="633812968384397312">Tweets by @ReImagineNewton</a>
						<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
						<div class="panel panel-danger">
						  <div class="panel-heading">
							<h3 class="panel-title"><span class="glyphicon glyphicon-home"></span> General Information</h3>
						  </div>
						  <div class="panel-body">
							<p>
								<strong>Phone:</strong> 555-246-21599
							</p>
							<p>
								<strong>Address:</strong> 123 Spring St.
								  Covington, GA 30016
							  </p>
							  <p>
								  <strong>Hours: </strong>Mon-Fri - 8:00-5:00
							  </p>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	<footer>
		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="src/js/bootstrap.js"></script>
		<script src="src/js/site.js"></script>
	</footer>
</html>