using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ComputerVision.Models
{
    public class ImageAnalyzeRequest
    {
        [Required]
        public string subscriptionKey { get; set; }

        [Required]
        public string endpoint { get; set; }

        [Required]
        public string imageUrl { get; set; }
    }
}
