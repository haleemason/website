// JavaScript Document

$(window).load(function () {
  "use strict";
  // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(350).css({
    overflow: "visible",
  });
});

$(document).ready(function () {
  "use strict";

  // scroll menu
  var sections = $(".section"),
    nav = $(".navbar-fixed-top,footer"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height + 2,
      },
      600
    );

    return false;
  });

  // Menu opacity
  if ($(window).scrollTop() > 80) {
    $(".navbar-fixed-top").addClass("bg-nav");
  } else {
    $(".navbar-fixed-top").removeClass("bg-nav");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $(".navbar-fixed-top").addClass("bg-nav");
    } else {
      $(".navbar-fixed-top").removeClass("bg-nav");
    }
  });

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  $(function () {
    parallax();
  });

  // AOS
  AOS.init({
    duration: 1200,
    once: true,
    disable: "mobile",
  });

  //  isotope
  $("#projects").waitForImages(function () {
    var $container = $(".portfolio_container");
    $container.isotope({
      filter: "*",
    });

    $(".portfolio_filter a").click(function () {
      $(".portfolio_filter .active").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine: "jquery",
        },
      });
      return false;
    });
  });

  //animatedModal
  $("#demo01,#demo02,#demo03").animatedModal();

  // Contact Form

  // validate contact form
  $(function () {
    $("#contact-form").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
        },
        phone: {
          required: false,
        },
        message: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "This field is required",
          minlength: "your name must consist of at least 2 characters",
        },
        email: {
          required: "This field is required",
        },
        message: {
          required: "This field is required",
        },
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "process.php",
          success: function () {
            $("#contact :input").attr("disabled", "disabled");
            $("#contact").fadeTo("slow", 1, function () {
              $(this).find(":input").attr("disabled", "disabled");
              $(this).find("label").css("cursor", "default");
              $("#success").fadeIn();
            });
          },
          error: function () {
            $("#contact").fadeTo("slow", 1, function () {
              $("#error").fadeIn();
            });
          },
        });
      },
    });
  });
});

function populateModalContent(
  title,
  contentTop,
  contentBottom,
  imgPath,
  videoUrl = null
) {
  document.getElementById("modal-title").innerHTML = title;
  document.getElementById("modal-content-top").innerHTML = contentTop;
  document.getElementById("modal-content-bottom").innerHTML = contentBottom;
  if (videoUrl) {
    document.getElementById("modal-video").src = videoUrl;
    document.getElementById("modal-video").style.display = "block";
  } else {
    document.getElementById("modal-video").style.display = "none";
  }

  document.getElementById("modal-img").src = imgPath;
}

const sectionModels = [
  {
    title: "Microsoft Technical Spotlight<br /> InCulture Inspire Article",
    contentTop:
      "<p><b>Interviewed:</b> May 2020<br> <p>For Halee Mason, success means pursuing what you love.</p>",
    contentBottom: `<div>Meet Halee Mason, Lead Data Scientist at esports organization Cloud9. Learn how she defined her own path by committing to the things she loves with steadfast determination.</p> <br><br> Driven by her passions, Halee Mason is redefining the toolkit for success in competitive gaming. She's the lead data scientist for mythic esports organization Cloud9, where she's working on a new data insights platform for the game League of Legends to help players glean insights from their performance, enhance their skills, and ultimately see real results in their gameplay. <br><br> For Halee, defining her own path and discovering her life's work wasn't always straightforward. But by following her heart and tapping into her unwavering competitive spirit, she unlocked a fulfilling and passion-led life. <br><br> <iframe src='https:/\/www.youtube.com/embed/2oHFPBKe0Go?autoplay=1&mute=1' id='modal-video' width='100%' height='338' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe> <br><br>Growing up, Halee was a self-proclaimed tomboy with a video game obsession. Her adventurous free-spirit and mischievous tendencies defined her. &quot;I wasn't afraid to get my hands dirty or jump in the mud&quot;, she recalls. Notably, Halee's hobbies all had one thing in common: her drive to be the best at whatever she does. Her passions were the way she distinguished herself. The other way Halee defined her own unique path? Gaming.<br><br> Esports started out as a way for Halee to &quot;be really good at something&quot;. But they quickly consumed her. Mastering the game didn't happen overnight. Dedicated to improving, Halee played relentlessly, often late into the night. Gaming was a means of self-expression, skill-building, and community. She even met her boyfriend through gaming, the relationship built upon years of synergy and hours of collaborative online gameplay.<br><br> Halee didn't just play-she was also an early fan of the competitive esports industry. Cloud9 was always the organization she connected to most deeply. It was purely by coincidence that one night she found herself facing off against her favorite team. &quot;I was part of a diamond ranked 5v5 team and we got randomly matched up against the official Cloud9 roster&quot;, she remembers. Exciting gaming moments like this defined her and helped her realize her talent.<br><br> However, it wasn't until after college that she was able to unite her passions. Working as a clinical lab scientist, Halee found herself drawn to data analysis. She remembers being immersed in the challenge of &quot;improving a process or figuring out ways to help others.&quot; So, she pursued an online master's in data science and transitioned into the field where she developed the skills needed to become a data scientist. In her first role, at Elder Research, she learned how to build predictive models, communicate with technical stakeholders, and translate data into business value.<br><br>It was one day, by chance, that she saw the opportunity of a lifetime on Linkedin: Data Scientist at Cloud9. Halee had never considered the idea that the esports industry needed data scientists. Within a few hours, the position had received hundreds of applicants, but Halee wasn't deterred. Monitoring the job incessantly, she submitted her own application that very same day. And to her delight, she was contacted for an interview. Radiating confidence and competence, she was selected for the coveted position.<br><br>Still, taking the job was a big risk. How could she upend her entire life and move to Los Angeles, a place she had never even visited? What would life be like so far from her tight-knit and supportive family in Virginia? &quot;I had never even been to California before&quot;, Halee says. But she bravely took the job and made the trek across the United States.<br><br>Out west, Halee dove headfirst into work. Her mission: proving data's MVP status on the esports playing field. &quot;It was nerve-wracking. I knew that I was going into an organization where there wasn't a team of other data scientists or analysts&quot;, she discloses. Her role was totally uncharted territory for the industry. &quot;For Cloud9, data science was new. I had to carve my own way and shape how the team used data.&quot;<br><br>Never one to back down from a challenge, Halee stayed focused. How'd she push past nerves and doubt?<br><br>Knowing small gains add up and lead to the big wins, Halee applied data to everything from the draft and champion selection to scrim feedback. Her analytical approach and fresh perspective has gained support from the players as well as Cloud9 founder, Jack Etienne. &quot;She's really good, and she understands our world and what we do&quot;, he says. &quot;Her immense technical knowledge makes her a standout.&quot;<br><br>Halee is helping shed light on the value of data science for the massive esports industry-and beyond. It all comes from a place of love. She's determined to help the team reach new heights. She's also on the frontlines of shifting the world's perception about what hobbies and careers are acceptable for women. She hopes the next generation of girls feels fearlessly empowered to pursue what fascinates them, just like she did. Her advice to young women who dream of following in her footsteps? &quot;Don't be scared. If this is something you're interested in, the best advice I can give you is just be unapologetically you.&quot;<br><br> </div>`,
    imgPath: "img/portfolio/msft/cloud9-halee-mason-teammember-1422x800.jpg",
    videoUrl: null,
  },
];

function openProject() {
  const { title, contentTop, contentBottom, imgPath, videoUrl } = sectionModels[0];
  populateModalContent(title, contentTop, contentBottom, imgPath, videoUrl);
}
